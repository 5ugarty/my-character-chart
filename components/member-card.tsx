"use client"

import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

interface MemberCardProps {
  name: string
  nameKo: string
  imageUrl: string
  defaultValue?: number
}

export function MemberCard({
  name,
  nameKo,
  imageUrl,
  defaultValue = 50,
}: MemberCardProps) {
  const [value, setValue] = useState(defaultValue)
  const [comment, setComment] = useState("")

  const gongPercent = value
  const suPercent = 100 - value

  return (
    <Card className="overflow-hidden border-border/50 bg-card shadow-sm hover:shadow-lg transition-all duration-200">
      <CardContent className="p-5">
        {/* Member info */}
        <div className="flex items-center gap-4 mb-5">
          <Avatar className="h-20 w-20 border-2 border-border shrink-0 shadow-sm">
            <AvatarImage
              src={imageUrl || "/placeholder.svg"}
              alt={`${nameKo} 사진`}
              className="object-cover"
            />
            <AvatarFallback className="text-xl font-bold bg-muted text-muted-foreground">
              {nameKo.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-lg font-bold text-foreground leading-tight">
              {nameKo}
            </p>
          </div>
        </div>

        {/* Slider area */}
        <div className="mb-4">
          {/* Labels */}
          <div className="flex items-end justify-between mb-2">
            <div className="text-left">
              <span className="text-xs font-semibold text-foreground">공</span>
              <span className="ml-1 text-lg font-bold tabular-nums text-foreground">
                {gongPercent}%
              </span>
            </div>

            <div className="text-right">
              <span className="mr-1 text-lg font-bold tabular-nums text-foreground">
                {suPercent}%
              </span>
              <span className="text-xs font-semibold text-foreground">수</span>
            </div>
          </div>

          {/* Custom slider bar */}
          <div className="relative h-6 flex items-center">
            {/* Track background */}
            <div className="absolute inset-x-0 h-2.5 rounded-full overflow-hidden flex">
              <div
                className="bg-neutral-300 transition-all duration-100 ease-out rounded-l-full"
                style={{ width: `${gongPercent}%` }}
              />
              <div
                className="bg-neutral-700 transition-all duration-100 ease-out rounded-r-full"
                style={{ width: `${suPercent}%` }}
              />
            </div>
            {/* Invisible range input */}
            <input
              type="range"
              min={0}
              max={100}
              step={1}
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              className="absolute inset-x-0 w-full h-6 opacity-0 cursor-pointer z-10"
              aria-label={`${nameKo} 공/수 비율 슬라이더`}
            />
            {/* Thumb indicator */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-5 w-5 rounded-full border-2 border-foreground/80 bg-card shadow-md pointer-events-none transition-all duration-100 ease-out z-[5]"
              style={{ left: `calc(${value}% - 10px)` }}
            />
          </div>


        </div>

        {/* Comment textarea */}
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="자유롭게 작성 가능"
          className="resize-none text-sm min-h-[72px] border-border/40 bg-secondary/40 placeholder:text-muted-foreground/40 focus:bg-card focus:border-ring/40 transition-colors"
        />
      </CardContent>
    </Card>
  )
}
