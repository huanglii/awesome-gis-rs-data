export function sort (arr) {
  arr.sort((a, b) => a.localeCompare(b))
}

export function sortBy (arr, value) {
  arr.sort((a, b) => a[value].localeCompare(b[value]))
}
