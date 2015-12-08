# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


candidates = Candidate.create([{ handle: '@HillaryClinton', party: 'Democratic'}, 
  { handle: '@BernieSanders', party: 'Democratic'}, 
  { handle: '@MartinOMalley', party: 'Democratic'},
  { handle: '@realDonaldTrump', party: 'Republican'},
  { handle: '@marcorubio', party: 'Republican'},
  { handle: '@RandPaul', party: 'Republican'},
  { handle: '@RickSantorum', party: 'Republican'},
  { handle: '@JohnKasich', party: 'Republican'},
  { handle: '@JebBush', party: 'Republican'},
  { handle: '@RealBenCarson', party: 'Republican'},
  { handle: '@ChrisChristie', party: 'Republican'},
  { handle: '@CarlyFiorina', party: 'Republican'},
  { handle: '@gov_gilmore', party: 'Republican'},
  { handle: '@GovMikeHuckabee', party: 'Republican'},
  { handle: '@GovernorPataki', party: 'Republican'},
  { handle: '@LindseyGrahamSC', party: 'Republican'}
])