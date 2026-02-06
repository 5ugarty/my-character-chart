"use client"

import { useState } from "react"
import { MemberCard } from "@/components/member-card"

const members = [
  { name: "Bang Chan", nameKo: "방찬", imageUrl: "/members/bangchan.jpg", defaultValue: 50 },
  { name: "Lee Know", nameKo: "리노", imageUrl: "/members/leeknow.jpg", defaultValue: 50 },
  { name: "Changbin", nameKo: "창빈", imageUrl: "/members/changbin.jpg", defaultValue: 50 },
  { name: "Hyunjin", nameKo: "현진", imageUrl: "/members/hyunjin.jpg", defaultValue: 50 },
  { name: "Han", nameKo: "한", imageUrl: "/members/han.jpg", defaultValue: 50 },
  { name: "Felix", nameKo: "필릭스", imageUrl: "/members/felix.jpg", defaultValue: 50 },
  { name: "Seungmin", nameKo: "승민", imageUrl: "/members/seungmin.jpg", defaultValue: 50 },
  { name: "I.N", nameKo: "아이엔", imageUrl: "/members/in.jpg", defaultValue: 50 },
]

type TagState = "gong" | "su"

export function CharacterChart() {
  const [tags, setTags] = useState<Record<string, TagState>>(() => {
    const initial: Record<string, TagState> = {}
    for (const m of members) {
      initial[m.name] = "gong"
    }
    return initial
  })

  function toggleTag(name: string) {
    setTags((prev) => ({
      ...prev,
      [name]: prev[name] === "gong" ? "su" : "gong",
    }))
  }

  const gongMembers = members.filter((m) => tags[m.name] === "gong")
  const suMembers = members.filter((m) => tags[m.name] === "su")

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 md:py-12">
      <header className="mb-8 md:mb-10">
        <img
          src="/images/png-transparent-stray-kids-logo.png"
          alt="Stray Kids 로고"
          className="h-10 w-auto md:h-12"
        />

        {/* Tag classification area */}
        <div className="mt-5 flex flex-col gap-2.5">
          {/* 공 row */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-foreground w-5 shrink-0">공</span>
            <div className="flex flex-wrap gap-1.5">
              {gongMembers.map((m) => (
                <button
                  key={m.name}
                  type="button"
                  onClick={() => toggleTag(m.name)}
                  className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700 transition-colors hover:bg-sky-100 dark:border-sky-800 dark:bg-sky-950 dark:text-sky-400 dark:hover:bg-sky-900"
                >
                  {m.nameKo}
                </button>
              ))}
              {gongMembers.length === 0 && (
                <span className="text-xs text-muted-foreground/50 py-1">-</span>
              )}
            </div>
          </div>

          {/* 수 row */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-foreground w-5 shrink-0">수</span>
            <div className="flex flex-wrap gap-1.5">
              {suMembers.map((m) => (
                <button
                  key={m.name}
                  type="button"
                  onClick={() => toggleTag(m.name)}
                  className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-600 transition-colors hover:bg-purple-100 dark:border-purple-800 dark:bg-purple-950 dark:text-purple-400 dark:hover:bg-purple-900"
                >
                  {m.nameKo}
                </button>
              ))}
              {suMembers.length === 0 && (
                <span className="text-xs text-muted-foreground/50 py-1">-</span>
              )}
            </div>
          </div>
        </div>
        <p className="mt-2 text-[11px] text-muted-foreground/60">클릭하여 공/수 전환 가능</p>
      </header>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
        {members.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            nameKo={member.nameKo}
            imageUrl={member.imageUrl}
            defaultValue={member.defaultValue}
          />
        ))}
      </div>
    </div>
  )
}
