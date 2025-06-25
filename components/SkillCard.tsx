interface SkillCardProps {
  title: string
  icon: string
}

export default function SkillCard({ title, icon }: SkillCardProps) {
  return (
    <div className="bg-gray-800 flex items-center gap-3 p-4 rounded-xl">
      <img src={icon} alt={title} className="w-6 h-6" />
      <span className="text-white text-sm font-medium">{title}</span>
    </div>
  )
}
