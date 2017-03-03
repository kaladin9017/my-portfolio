import { GET_PAGE_INFO } from '../actions/index';
const initialState = {
  earlystart: { name:'Early Start', description: 'Over half a million students are enrolled in pre-k through middle school every year and Early Start is an interface where parents and their children have easy access to the resources needed to make better decisions about early education.', gif: 'http://i.imgur.com/vdJ8Dfx.gif', spec:'Javascript, React, React-Router, Redux, GSAP, and Reactive Maps · Used GSAP for animation, and Redux to store information from NYC Open data API, and Aunt bertha API', link: 'https://early-start.herokuapp.com', image:'http://i.imgur.com/1axkPJL.png', github: 'https://github.com/kaladin9017/Early-Start' },
  gamedash: { name:'Game Dash', description: 'A dashboard used to consolidate 3rd party tools to enable gamers to enhance their gameplay through metagaming.', gif: 'http://i.imgur.com/eh2yPl3.gif', spec:'React, React-Router, Redux, HTML, CSS, Webpack, Babel, Passport, Restful API', link: 'http://game-dash.herokuapp.com', image:'http://i.imgur.com/2MEUxLe.png?4', github: 'https://github.com/kaladin9017/Game-Dash' },
  breathe: { name:'Breathe', description: 'Mindful meditation app that generates random phrases using keywords provided by the user to provide a unique experience each time the user logs in.', gif: 'http://i.imgur.com/Ig3DiEH.gif', spec:'React, CSS, React-Player, React-Router', link: 'http://shy-dream.herokuapp.com/', image:'http://i.imgur.com/Mx24CX3.png?1', github: 'https://github.com/kaladin9017/Breathe' },
  queenslist: { name:'QueensList', description: '', gif: '', spec:'', link: '#', image:'#' },
  weatherapp: { name:'Weather App', description: 'Weather app used to experiment with virtual dom and react lifecycle methods', gif: 'http://i.imgur.com/S1mcd1V.gif', spec:'React, Html, Css, Webpack, babel', link: '#', image:'http://i.imgur.com/G2xfh7G.png', github: 'https://github.com/kaladin9017/weather' },
};

export default function (state = initialState, action) {
  switch (action.type) {

  case GET_PAGE_INFO:
    return state;
}
  return state;

}
