import Profile from "./Components/Profile";
import profileImg from "./assets/profile-pic.jpeg"
import React from 'react'


export default function App(){
  return(
    <div className="app">
      <Profile 
        avatar={profileImg}
        name="Felipe Batista"
        bio="23 anos, estudante na Unimetrocamp Wyden cursando Análise e Desenvolvimento de Sistemas, com grande admiração por programação web, em constante aprendizado."
        email="felipe-gdp1@hotmail.com"
        phone="(19) 99439-4068"
        githubURL="https://github.com/FelipeBdS"
        linkedinURL="https://www.linkedin.com/in/felipe-batista-ds"
      />
    </div>
  )
}