import { GET_PAGE_INFO } from '../actions/index';
const initialState = { earlystart: { name:'Early Start', description: 'Over half a million students are enrolled in pre-k through middle school every year and Early Start is an interface where parents and their children have easy access to the resources needed to make better decisions about early education.', gif: 'http://i.imgur.com/vdJ8Dfx.gif', spec:'Javascript, React, Redux, GSAP, and Reactive Maps · Used GSAP for animation, and Redux to store information from NYC Open data API, and Aunt bertha API', link: 'https://early-start.herokuapp.com', image:'http://i.imgur.com/1axkPJL.png' }, gamedash: {} };

export default function (state = initialState, action) {
  switch (action.type) {

  case GET_PAGE_INFO:
    return state;
}
  return state;

}
