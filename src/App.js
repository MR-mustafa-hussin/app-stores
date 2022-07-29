import  Navbar  from './components/Navbar/Navbar';
import  Card  from './components/card/Card';
import team2 from './asseat/team2.jpg'
import team3 from './asseat/team3.jpg'
import team4 from './asseat/team4.jpg'
import team5 from './asseat/team5.jpg'
import team6 from './asseat/team6.jpg'


const App = () =>  {
const data =[{Title:'title1' , Text:'text1' , img: team2},{Title:'title2' , Text:'text2' , img: team3},{Title:'title3' , Text:'text3' , img: team4},{Title:'title4' , Text:'text4' , img: team5},
  {Title:'title5' , Text:'text5' , img: team6},
]
  return (
          <div >
            <Navbar />
            {
            data.map((item ,index)=> {
            return(
              <Card key={index} Title={item.Title} Text={item.Text} img={item.img} />
            )
            })
            }
          </div>
  )
}
export default App;
