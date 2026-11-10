import React from 'react'
import Section1 from './Components/Section1';

const App = () => {
  const users = [
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800",
    intro: "Enjoys spending time alone, thinking deeply and understanding things.",
    color: "royalblue",
    tag: "Introvert"
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    intro: "Loves social interactions, meeting new people and making connections.",
    color: "lightseagreen",
    tag: "Extrovert"
  },
  {
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800",
    intro: "Understands other people's feelings and easily connects emotionally.",
    color: "orange",
    tag: "Empathetic"
  },
  {
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
    intro: "Often thinks deeply about situations and worries about future outcomes.",
    color: "pink",
    tag: "Overthinker"
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800",
    intro: "Believes in personal abilities and handles challenges with confidence.",
    color: "purple",
    tag: "Confident"
  }
];
  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App
