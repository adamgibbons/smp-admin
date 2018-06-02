export default function (name) {
  try {
    return {
      multiPolicy: 'Multi-policy',
      health: 'Health',
      car: 'Car',
      homeowners: 'Homeowners',
      life: 'Life',
      disability: 'Disability',
      other: 'Other'
    }[name]
  } catch (e) {}
  return '-'
}
