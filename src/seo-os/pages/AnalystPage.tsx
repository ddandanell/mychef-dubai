import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import { PageFrame } from "@/seo-os/components/page-frame"

const STARTERS = [
  "What should I focus on first?",
  "Which pages are losing visibility?",
  "Are there keyword cannibalisation problems?",
  "What is happening with impressions, clicks and CTR?",
  "Why is this site not ranking for private chef dubai?",
  "Which keywords are the biggest missed opportunities?",
  "What does the SEO score actually mean?",
]

type Message = {
  role: "you" | "ai"
  text: string
  meta?: string
  error?: boolean
}

export default function AnalystPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [question, setQuestion] = useState("")
  const [pending, setPending] = useState(false)

  async function ask(next: string) {
    const q = next.trim()
    if (!q || pending) return
    setQuestion("")
    setPending(true)
    setMessages((prev) => [...prev, { role: "you", text: q }, { role: "ai", text: "Reading the database…" }])
    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q }),
      })
      const payload = (await response.json()) as { answer?: string; error?: string; provider?: string; run?: string }
      setMessages((prev) => {
        const copy = [...prev]
        copy[copy.length - 1] = response.ok
          ? { role: "ai", text: payload.answer || "", meta: [payload.provider, payload.run ? `run #${payload.run}` : ""].filter(Boolean).join(" · ") }
          : { role: "ai", text: payload.error || `The analyst returned ${response.status}.`, error: true }
        return copy
      })
    } catch (error) {
      setMessages((prev) => {
        const copy = [...prev]
        copy[copy.length - 1] = {
          role: "ai",
          text: error instanceof Error ? error.message : "Could not reach the analyst.",
          error: true,
        }
        return copy
      })
    } finally {
      setPending(false)
    }
  }

  return (
    <PageFrame
      title="Analyst"
      description="Reads the live SEO database and explains it in plain language. Read-only: it can tell you what to change but cannot change anything."
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 pb-8 lg:px-6">
        <div className="flex flex-wrap gap-2">
          {STARTERS.map((starter) => (
            <Button key={starter} type="button" variant="outline" size="sm" onClick={() => void ask(starter)}>
              {starter}
            </Button>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          {messages.map((message, i) => (
            <Card key={`${message.role}-${i}`} className={message.role === "you" ? "border-transparent shadow-none" : undefined}>
              <CardContent className="flex flex-col gap-2 py-4">
                <p className="text-muted-foreground text-xs uppercase tracking-wide">{message.role === "you" ? "You" : "Analyst"}</p>
                <p className={message.error ? "text-destructive whitespace-pre-wrap" : "whitespace-pre-wrap"}>
                  {message.text}
                </p>
                {message.meta ? <p className="text-muted-foreground text-xs">{message.meta}</p> : null}
              </CardContent>
            </Card>
          ))}
        </div>
        <form
          className="flex flex-col gap-2 sm:flex-row sm:items-end"
          onSubmit={(e) => {
            e.preventDefault()
            void ask(question)
          }}
        >
          <Textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder='Ask about the numbers — "why did this keyword drop?"'
            rows={2}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                void ask(question)
              }
            }}
          />
          <Button type="submit" disabled={pending || !question.trim()}>
            {pending ? <Spinner /> : null}
            Ask
          </Button>
        </form>
        <p className="text-muted-foreground text-center text-xs">
          Answers come from the latest archived run. Each question costs a few cents of model time.
        </p>
      </div>
    </PageFrame>
  )
}
