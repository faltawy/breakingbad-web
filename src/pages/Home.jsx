import React from 'react'
import BR from '../assets/images/BR.jpg'

function P({ children }) {
  return <p className='leading-10 text-white text-lg font-semibold first-letter:text-xl first-letter:capitalize'>{children}</p>
}

function Img({ className, src }) {
  return <img className={'rounded-lg object-cover object-center w-[200px] h-[300px] ' + className} src={src} alt="" />
}

function Home() {
  return (
    <div className="container bg-black bg-opacity-25 p-5">
      <div>
        <div className='flex items-center group flex-col gap-2'>
          <div className='flex gap-3 justify-center items-center'>
            <Img src={BR} className='' alt="" />
          </div>
          <h1 className='leading-tight text-3xl font-bold text-green-900 relative hover:after:w-full hover:before:w-full after:rounded-lg before:rounded-lg
          after:w-5 before:w-5 after:h-1 before:h-1 after:absolute before:absolute after:left-0 before:right-0 after:bottom-0 before:bottom-0 after:bg-primary before:bg-primary
          after:transition-all before:transition-all
          '>
            Breaking Bad
          </h1>
        </div>
        <div className='flex flex-col flex-start gap-3 py-3'>
          <P>is an American neo-Western crime drama television series created and produced by Vince Gilligan. Set and filmed in Albuquerque, New Mexico, it tells the story of Walter White (Bryan Cranston), an underpaid, overqualified, and dispirited high-school chemistry teacher who is struggling with a recent diagnosis of stage-three lung cancer, turning to a life of crime and partnering with his former student Jesse Pinkman (Aaron Paul) to produce and distribute crystal meth to secure his family's financial future before he dies, while navigating the dangers of the criminal underworld. The show aired on AMC from January 20, 2008, to September 29, 2013, consisting of five seasons for a total of 62 episodes.
            Among the show's co-stars are Anna Gunn and RJ Mitte as Walter's wife Skyler and son Walter Jr., and Betsy Brandt and Dean Norris as Skyler's sister Marie Schrader and her husband Hank, a DEA agent. Others include Bob Odenkirk as Walter's and Jesse's lawyer Saul Goodman, Jonathan Banks as private investigator and fixer Mike Ehrmantraut, and Giancarlo Esposito as drug kingpin Gus Fring. The final season introduces Jesse Plemons as the criminally ambitious Todd Alquist, and Laura Fraser as Lydia Rodarte-Quayle, a cunning business executive secretly managing Walter's global meth sales for her company.
          </P>

          <P>Breaking Bad's first season received generally positive reviews, while the rest of its run received unanimous critical acclaim. Since its conclusion, the show has been lauded by critics as one of the greatest television series of all time.[8] It had fair viewership in its first three seasons, but the fourth and fifth seasons saw a moderate rise in viewership when it was made available on Netflix just before the fourth season premiere. Viewership increased more drastically upon the premiere of the second half of the fifth season in 2013. By the time that the series finale aired, it was among the most-watched cable shows on American television. The show received numerous awards, including 16 Primetime Emmy Awards, eight Satellite Awards, two Golden Globe Awards, two Peabody Awards, two Critics' Choice Awards, and four Television Critics Association Awards. Cranston won the Primetime Emmy Award for Outstanding Lead Actor in a Drama Series four times, while Aaron Paul won the Primetime Emmy Award for Outstanding Supporting Actor in a Drama Series three times; Anna Gunn won the Primetime Emmy Award for Outstanding Supporting Actress in a Drama Series twice. In 2013, Breaking Bad entered the Guinness World Records as the most critically acclaimed TV show of all time.

            The series gave rise to the larger Breaking Bad franchise. A sequel film, El Camino: A Breaking Bad Movie, starring Paul was released on Netflix and in theaters on October 11, 2019.[10] Better Call Saul, a prequel series featuring Odenkirk, Banks, and Esposito reprising their Breaking Bad roles, as well as many others in guest and recurring appearances, debuted on AMC on February 8, 2015, and is currently airing its sixth and final season.</P>
        </div>
      </div>
    </div>
  )
}

export default Home