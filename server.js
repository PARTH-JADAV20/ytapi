const express = require("express");
const cors = require("cors"); 
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

app.use('/images', express.static(path.join(__dirname, './IMG')));

const data1 = [
  { 
      id: 2, 
      img01: '/images/Thumbnail-8.png', 
      img: '/images/Ellipse 4 (1).png', 
      tick: '/images/verified.png', 
      dot: '/images/Ellipse 4-1.png', 
      title: "Bulbuli |Coke Studio Bangla |Season One |Ritu Raj X Nandita", 
      chname: "Coke Studio Bangla", 
      views: "1.5M views", 
      time: "2 days ago", 
      className: "cname27"
  },
  { 
      id: 2, 
      img01: '/images/Thumbnail-9.png', 
      img: '/images/Ellipse 4 (2).png', 
      tick: '/images/verified.png', 
      dot: '/images/Ellipse 4-1.png', 
      title: "Infinix Note 12: AMOLED Helio G88 SoC!", 
      chname: "ATC Android ToTo Company", 
      views: "4.2M views", 
      time: "2 days ago", 
      className: "cname2"
  },
  { 
      id: 2, 
      img01: '/images/Thumbnail-10.png', 
      img: '/images/Ellipse 4 (3).png', 
      tick: '/images/verified.png', 
      dot: '/images/Ellipse 4-1.png', 
      title: "MY first UX Design case study-this got me my first job.", 
      chname: "Saptarshi Prakash", 
      views: "4.8K views", 
      time: "1 year ago", 
      className: "cname23"
  },
  { 
      id: 1, 
      img01: '/images/Thumbnail-11.png', 
      img: '/images/live.png', 
      title: "My Mix", 
      chname: "Lopamundra Mitra, Anupam Roy, and more", 
      cname: "thumb4", 
      cname2: "mixbox1"
  },
  { 
      id: 2, 
      img01: '/images/Thumbnail-4.png', 
      img: '/images/Ellipse 4 (4).png', 
      tick: '/images/verified.png', 
      dot: '/images/Ellipse 4-1.png', 
      title: "UX Design-What is it? (From AJ&Smart)", 
      chname: "AJ&Smar", 
      views: "150K views", 
      time: "3 years ago", 
      className: "cname24"
  },
  { 
      id: 1, 
      img01: '/images/Thumbnail-5.png', 
      img: '/images/live.png', 
      title: "Mix-Mombati | Mohan Sharif | Dhakaiya Dose | Mahib Ahsan ft Anika", 
      chname: "Mohan Sharif, Odd Signature, Shayan Chowdhury Arnob, and more", 
      cname: "thumb4a", 
      cname2: "mixbox2"
  },
  { 
      id: 2, 
      img01: '/images/Thumbnail-6.png', 
      img: '/images/Ellipse 4 (5).png', 
      tick: '/images/verified.png', 
      dot: '/images/Ellipse 4-1.png', 
      title: "| 48 VISA-FREE", 
      chname: "Nadir On The Go", 
      views: "1.7M views", 
      time: "1 year ago", 
      className: "cname25"
  },
  { 
      id: 2, 
      img01: '/images/Thumbnail-7.png', 
      img: '/images/Ellipse 4 (6).png', 
      tick: '/images/verified.png', 
      dot: '/images/Ellipse 4-1.png', 
      title: "14 Advanced Tips to Design FASTER in Figma", 
      chname: "Mizko", 
      views: "53K views", 
      time: "1 year ago", 
      className: "cname26"
  },
  { 
      id: 2, 
      img01: '/images/Thumbnail.png', 
      img: '/images/Ellipse 4 (1).png', 
      tick: '/images/verified.png', 
      dot: '/images/Ellipse 4-1.png', 
      title: "Bulbuli |Coke Studio Bangla |Season One |Ritu Raj X Nandita", 
      chname: "ATC Android ToTo Company", 
      views: "1.5M views", 
      time: "2 days ago", 
      className: "cname2"
  },
  { 
      id: 2, 
      img01: '/images/Thumbnail-1.png', 
      img: '/images/Ellipse 4 (1).png', 
      tick: '/images/verified.png', 
      dot: '/images/Ellipse 4-1.png', 
      title: "Most Valuable Tech Skills for Designers", 
      chname: "Tony Aube", 
      views: "15K views", 
      time: "4 years ago", 
      className: "cname2"
  },
  { 
      id: 2, 
      img01: '/images/Thumbnail-2.png', 
      img: '/images/Ellipse 4 (1).png', 
      tick: '/images/verified.png', 
      dot: '/images/Ellipse 4-1.png', 
      title: "How to Get a Design Job at Google", 
      chname: "Tony Aube", 
      views: "104K views", 
      time: "4 years ago", 
      className: "cname2"
  },
  { 
      id: 2, 
      img01: '/images/Thumbnail-3.png', 
      img: '/images/Ellipse 4 (1).png', 
      tick: '/images/verified.png', 
      dot: '/images/Ellipse 4-1.png', 
      title: "Meet Microsoft UX Designer! Journey to 100% Scholarship! GaTech", 
      chname: "Harnoor Singh", 
      views: "188K views", 
      time: "3 years ago", 
      className: "cname2"
  }
];


app.get("/yt_videos", (req, res) => {
    res.json(data1);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
