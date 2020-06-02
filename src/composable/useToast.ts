import { Message } from 'element-ui'

export function useToast () {
  const { info, success, error, warning } = Message
  return {
    info,
    success,
    error,
    warning
  }
}
