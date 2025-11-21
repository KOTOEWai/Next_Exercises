

function ThemedText({text = "default text"}: {text?: string}) {
  return <div data-testid="testId" >{text}</div>;
}
export default ThemedText;