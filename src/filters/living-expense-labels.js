const f = function (name) {
  try {
    return {
      gymMembership: 'Gym Membership',
      fuel: 'Fuel',
      publicTransportation: 'Public Transportation',
      healthcare: 'Healthcare',
      phoneInternetCable: 'Phone/Internet/Cable',
      diningOut: 'Dining Out',
      shopping: 'Shopping',
      entertainment: 'Entertainment',
      childcare: 'Childcare',
      other: 'Other'
    }[name]
  } catch (e) {}
  return '-'
}

export default f
