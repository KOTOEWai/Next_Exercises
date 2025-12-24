// Button.tsx
import styles from './component.module.css'
import StyledComponent from './StyledComponent'

export default function Page() {
  return (
    <>
    <h1 className={styles.heading}>Styling</h1>
    <button className={styles.error}>
      Error Button
    </button>
    <StyledComponent />

    </>
  )
}