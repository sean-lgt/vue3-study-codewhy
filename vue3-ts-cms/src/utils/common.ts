/**
 * @description: 判断对象是否有对应的key值
 * @return {*}
 */
export function isValidKey(
  key: string | number | symbol,
  // eslint-disable-next-line @typescript-eslint/ban-types
  object: object
): key is keyof typeof object {
  return key in object
}
