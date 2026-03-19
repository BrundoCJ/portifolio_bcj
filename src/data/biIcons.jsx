const textIcon = (label) => ({ size, color }) => (
  <span style={{ fontSize: size * 0.65, fontWeight: 800, color, lineHeight: 1, letterSpacing: '-0.5px' }}>{label}</span>
)

export const PowerBIIcon = textIcon('PBI')
export const DAXIcon     = textIcon('DAX')
export const MIcon       = textIcon('M')
