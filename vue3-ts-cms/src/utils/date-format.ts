import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

// dayjs 扩展
dayjs.extend(utc)

// 默认格式化时间
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

/**
 * @description: 格式化 UTC 时间
 * @return {*}
 * @param {string} utcString UTC时间字符串
 * @param {string} format 格式化格式
 */
export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).utcOffset(8).format(format) // 东八区时间
  // return dayjs.utc(utcString).format(format)
}
