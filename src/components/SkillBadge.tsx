type Props = { name: string }

export default function SkillBadge({ name }: Props) {
  return (
    <span className="skill-badge-geo">
      {name}
    </span>
  )
}
