const f = function (name) {
  try {
    return {
      electricity: 'Electricity',
      waterSewer: 'Water/Sewer',
      trash: 'Trash',
      naturalGas: 'Natural Gas',
      hoa: 'HOA',
      other: 'Other'
    }[name]
  } catch (e) {}
  return '-'
}

export default f
