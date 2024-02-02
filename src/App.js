import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNav from './component/TopNav/TopNav';
import Header from './component/Header/Header';
import Slider1 from './component/Slider1/Slider1';
import Title from './component/Title/Title';
import Courses from './component/Course/Courses';
import AboutUs from './component/AboutUs/AboutUs';
import Counter from './component/counter/Counter';
import Alumani from './component/Alumani/Alumani';
import WhyChoose from './component/WhyChoose/WhyChoose';
import Partners from './component/partner/Partners';
import Demand from './component/demand/Demand';
import Footer from './component/footer/Footer';


function App() {
  var sliderData = [
    { 'image': 'https://cdmi.in/sliders/1.webp' },
    { 'image': 'https://cdmi.in/sliders/web-design-institute-gujarat-surat.webp' },
    { 'image': 'https://cdmi.in/sliders/9.webp' }
  ]
  var CourseData = [
    { name: 'Development Courses', img: require(`./component/Course/Img/1.webp`) },
    { name: 'Design Courses', img: require(`./component/Course/Img/2.webp`) },
    { name: 'Programming IT', img: require(`./component/Course/Img/3.webp`) },
    { name: 'Trendy Courses', img: require(`./component/Course/Img/4.webp`) },
    { name: 'Civil-Mech. Engineering', img: require(`./component/Course/Img/5.webp`) },
    { name: 'Business Development', img: require(`./component/Course/Img/6.jpg`) }
  ]

  var countData = [
    { name: 'HAPPY STUDENTS', num: '18000+', img: require(`./component/counter/img/counterIcon1.png`) },
    { name: 'CERTIFICATION APPROVAL', num: '10+', img: require(`./component/counter/img/counterIcon2.png`) },
    { name: 'CERTIFIED TEACHERS', num: '100+', img: require(`./component/counter/img/counterIcon3.png`) },
    { name: 'STUDENTS PLACED', num: '12000+', img: require(`./component/counter/img/counterIcon4.png`) }
  ]
  var data = [
    {
      name: 'Henish Mavani',
      post: 'CEO',
      at: 'GrowStar Infotech',
      img: require(`./component/Alumani/img/1.jpg`)
    },
    {
      name: 'Diyora Om',
      post: 'React JS Developer',
      at: ' Artbees Solution',
      img: require(`./component/Alumani/img/1.jpg`)
    },
    {
      name: 'Nilay Rabadiya',
      post: 'CEO',
      at: ' Techtical Solution',
      img: require(`./component/Alumani/img/1.jpg`)
    },
    {
      name: 'PABADIYA JAIMIN',
      post: ' UI/UX Designer',
      at: 'ViPrak Web Solutions',
      img: require(`./component/Alumani/img/1.jpg`)
    }
  ]

  var arr = [
    {
      name: 'Industry Experts As Trainers',
      img: require(`./component/WhyChoose/Img/whychoose1.png`),
      className: 'ImgCover',
      id: 'ic1'
    },
    {
      name: 'Latest Curriculum',
      img: require(`./component/WhyChoose/Img/whychoose1.png`),
      className: 'ImgCover',
      id: 'ic2'
    },
    {
      name: 'Latest Technology',
      img: require(`./component/WhyChoose/Img/whychoose1.png`),
      className: 'ImgCover',
      id: 'ic3'
    },
    {
      name: 'Interview Assistance',
      img: require(`./component/WhyChoose/Img/whychoose1.png`),
      className: 'ImgCover',
      id: 'ic4'
    },
    {
      name: 'Free Upgradation',
      img: require(`./component/WhyChoose/Img/whychoose1.png`),
      className: 'ImgCover',
      id: 'ic5'
    },
    {
      name: 'Lifetime Support',
      img: require(`./component/WhyChoose/Img/whychoose1.png`),
      className: 'ImgCover',
      id: 'ic6'
    }
  ]

  var partnerData = [
    { img: require(`./component/partner/img/1.png`) },
    { img: require(`./component/partner/img/1.png`) },
    { img: require(`./component/partner/img/1.png`) },
    { img: require(`./component/partner/img/1.png`) },
    { img: require(`./component/partner/img/1.png`) },
    { img: require(`./component/partner/img/1.png`) },
    { img: require(`./component/partner/img/1.png`) },
    { img: require(`./component/partner/img/1.png`) },
    { img: require(`./component/partner/img/1.png`) },
    { img: require(`./component/partner/img/1.png`) },
    { img: require(`./component/partner/img/1.png`) },
    { img: require(`./component/partner/img/1.png`) },
    
  ]

  var arrObj = [
    { name: 'Autocad training institute in katargam' },
    { name: 'Adobe illustrator design' },
    { name: 'Latest technology course training institute in katargam' },
    { name: 'Game design course in surat' },
    { name: 'Flutter training institute in katargam' },
    { name: 'Android training course' },
    { name: 'Lumion training institute in Mota Varachha' },
    { name: 'Game design training institute in surat' },
    { name: 'Web Design Course in Surat' },
    { name: 'C programming language training institute in varachha' },
    { name: 'Autocad training institute in Mota Varachha' },
    { name: 'Web Design Course in Surat' }
  ]
  return (
    <div className="App">
      <TopNav></TopNav>
      <Header></Header>
      <Slider1 data={sliderData}></Slider1>
      <Title SubName='CREATIVE COURSE' Name='OFFERED COURSES'></Title>
      <Courses data={CourseData} ></Courses>
      <AboutUs></AboutUs>
      <Counter data={countData}></Counter>
      <Alumani data={data}></Alumani>
      <WhyChoose data={arr}></WhyChoose>
      <Partners data={partnerData}></Partners>
      <Demand data={arrObj}></Demand>
      <Footer></Footer>
    </div>
  );
}

export default App;
