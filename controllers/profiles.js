import { Profile } from "../models/profile.js"

function index(req, res){
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index',{
      profiles,
      title: 'Your Profiles'
    })
  })
  .catch(err => {
    res.redirect('/profiles')
  })
}

function newProfile(req,res){
  res.render('profiles/new', {
    title: 'Add your Death Plan'
  })
}

export{
  index,
  newProfile as new,
  
}

