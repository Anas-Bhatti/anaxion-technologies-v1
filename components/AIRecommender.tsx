'use client'
import { useState } from 'react'

type Option = { value: string; label: string }
type Question = { id: string; text: string; options: Option[] }

const questions: Question[] = [
  {
    id: 'situation',
    text: 'What best describes your situation?',
    options: [
      { value: 'startup',    label: 'I am building a new product / startup'                },
      { value: 'scale',      label: 'I have a product and need to scale / improve it'       },
      { value: 'enterprise', label: 'I run an established business needing custom software' },
      { value: 'ai',         label: 'I want to add AI to an existing system'               },
    ],
  },
  {
    id: 'budget',
    text: 'What is your approximate budget?',
    options: [
      { value: 'small',      label: 'Under $5,000'           },
      { value: 'medium',     label: '$5,000 – $20,000'       },
      { value: 'large',      label: '$20,000 – $100,000'     },
      { value: 'enterprise', label: '$100,000+'               },
    ],
  },
  {
    id: 'goal',
    text: 'What is your primary goal?',
    options: [
      { value: 'mvp',        label: 'Launch an MVP fast'                      },
      { value: 'automate',   label: 'Automate internal processes'             },
      { value: 'convert',    label: 'Build something that converts / sells'   },
      { value: 'integrate',  label: 'Connect and integrate existing tools'    },
    ],
  },
]

function getRecommendation(situation: string, budget: string, goal: string): string {
  if (situation === 'ai' || goal === 'integrate') {
    return '<strong>AI Integration Services</strong> — You already have a system and want to make it smarter. We recommend starting with an AI audit: we map your workflows and identify the highest-ROI integration points. Suitable for all budget ranges. Timeline: 4–8 weeks.'
  }
  if (situation === 'startup' && (budget === 'small' || budget === 'medium') && goal === 'mvp') {
    return '<strong>Custom Web Application (MVP)</strong> — For your stage, we recommend a lean MVP focused on your core value proposition. We cut scope ruthlessly, build fast, and get you to market in 6–10 weeks. AI features can be added in phase two.'
  }
  if (situation === 'enterprise' || budget === 'large' || budget === 'enterprise') {
    return '<strong>Enterprise System + AI Integration</strong> — At your scale, you need a purpose-built system that replaces fragmented tools. We recommend a discovery workshop to map requirements, then a phased build: core system first, AI layer second. Timeline: 3–6 months.'
  }
  if (goal === 'convert') {
    return '<strong>Custom Web App + UI/UX Design</strong> — Conversion-focused builds need excellent design as much as solid code. We recommend a combined engagement: full UI/UX system design followed by development. This ensures your product looks and performs at the level your market expects.'
  }
  if (goal === 'automate') {
    return '<strong>AI Integration + IT Consulting</strong> — Process automation is where AI delivers the fastest ROI. We recommend starting with a consulting session to map your top 3 manual bottlenecks, then building targeted AI automations for each.'
  }
  return '<strong>IT Consulting (Starting Point)</strong> — The smartest first step is a 30-minute discovery call. We will help you clarify the right approach, realistic budget, and timeline — before you commit to anything. No cost, no obligation.'
}

export default function AIRecommender() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [result,  setResult]  = useState<string | null>(null)

  const select = (questionId: string, value: string) =>
    setAnswers(prev => ({ ...prev, [questionId]: value }))

  const run = () => {
    if (!answers.situation || !answers.budget || !answers.goal) {
      alert('Please answer all 3 questions.')
      return
    }
    setResult(getRecommendation(answers.situation, answers.budget, answers.goal))
  }

  return (
    <div className="bg-surface border border-border p-10 mt-8">
      <span className="font-mono text-[10px] tracking-[4px] uppercase text-ion mb-2 block">⬡ AI Service Recommender</span>
      <p className="text-sm text-text2 mb-8">Answer 3 questions — get a tailored service recommendation instantly.</p>

      {questions.map(({ id, text, options }) => (
        <div key={id} className="mb-7">
          <div className="font-mono text-[10px] tracking-[3px] uppercase text-text2 mb-3">{text}</div>
          <div className="flex flex-col gap-2">
            {options.map(({ value, label }) => (
              <label key={value}
                className={`flex items-center gap-3 px-4 py-3.5 border cursor-pointer transition-all duration-200 text-sm ${
                  answers[id] === value
                    ? 'border-ion text-ion bg-ion/10'
                    : 'border-border text-text2 hover:border-ion/50 hover:bg-panel'
                }`}>
                <input
                  type="radio" name={id} value={value}
                  checked={answers[id] === value}
                  onChange={() => select(id, value)}
                  className="accent-ion"
                />
                {label}
              </label>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={run}
        className="w-full font-brand text-[11px] tracking-[4px] uppercase bg-ion text-black py-4 hover:bg-gold transition-colors duration-300"
      >
        Get My Recommendation →
      </button>

      {result && (
        <div className="mt-5 p-5 bg-ion/[0.08] border border-ion/30">
          <div className="font-mono text-[10px] tracking-[3px] uppercase text-ion mb-3">⬡ Anaxion Recommends</div>
          <p className="text-sm text-text1 leading-[1.85]" dangerouslySetInnerHTML={{ __html: result }} />
        </div>
      )}
    </div>
  )
}
