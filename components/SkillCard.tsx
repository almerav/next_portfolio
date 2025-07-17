import Image from 'next/image'

interface SkillCardProps {
  title: string
  icon: string
}

export default function SkillCard({ title, icon }: SkillCardProps) {
  return (
    <div className="bg-gray-800 flex items-center gap-3 p-4 rounded-xl">
      <Image
        src={icon}
        alt={title}
        width={24}
        height={24}
        className="w-6 h-6"
      />
      <span className="text-white text-sm font-medium">{title}</span>
    </div>
  )
}
