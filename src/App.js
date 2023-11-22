import React from 'react';
import './App.css'; // Import the CSS file

const NewsArticle = ({ article }) => {
  return (
    <div className="news-article">
      <a href={article.homeUrl} className="home-button">Home</a>
      <img src={article.logo} alt="Publication Logo" className="publication-logo" />
      <hr className="separator" />
      <h2>{article.title}</h2>
      <div className="overview"><b>Overview:</b> {article.overview}</div>
      <div className="article-meta">
        <span className="date-time">{article.date} | {article.time}</span>
        <span className="publication">{article.publication}</span>
      </div>
      <img src={article.image} alt={article.title} className="article-image" />
      <p>{article.content}</p>
    </div>
  );
};

// Define your main App component
const App = () => {
  // Sample article data
  const article = {
    title: "Virat Kohli equals Sachin Tendulkar's record for most hundreds in one-day internationals",
    date: '05 Nov 2023',
    time: '10:00 AM',
    publication: 'THE DAILY BUGLE',
    homeUrl: 'https://daily-bugle-ej94.vercel.app/', // replace with your home URL
    logo: '../logo.jpg', // replace with the path to your logo
    overview: `India vs South Africa, World Cup 2023: Virat Kohli hit his 49th hundred in his 289th one-day international to draw level with Sachin Tendulkar, who finished with 49 hundreds from 463 ODIs. The two batting legends from India now jointly hold the record for most ODI hundreds.`,
    content: `Virat Kohli equaled Sachin Tendulkar's record for most hundreds in one-day internationals during India's 8th match of the 2023 World Cup against South Africa at the Eden Gardens in Kolkata on Sunday.
    Virat Kohli scored the record-equaling ODI hundred on his 35th birthday after weeks of anticipation. Kohli has been in stunning form in the World Cup and during the course of his innings on Sunday, became the third Indian after Sachin Tendulkar and Rohit Sharma to get past the 500-run mark in a single edition of the World Cup. Kohli had started with a classy 85 against Australia in India's opening match before scoring his 48th hundred against Bangladesh. He had come close on two occasions thereafter, but he was dismissed for 95 against New Zealand and then fell for 88 against Sri Lanka at the Wankhede Stadium on November 2.

While Virat Kohli got to his 49th hundred in just his 289th ODI, Tendulkar had scored his 49th hundred in his penultimate ODI, the 462nd of his career. That was also Tendulkar's 100th international hundred, a record that is unlikely to be broken unless Kohli is able to continue his red-hot form for a few more years.

Virat Kohli had made his ODI debut against Sri Lanka in August 2008 and then went on to score his maiden one-day international hundred against them in December 2009.
Virat Kohli, in a glittering career that starred 15 years back, has scored 10 hundreds against Sri Lanka, 9 hundreds against West Indies, 8 against Australia, 5 each against Bangladesh and New Zealand and South Africa and 3 each against Pakistan and England. and 1 against Zimbabwe.

Virat Kohli's highest individual score of 183 came against Pakistan in Mirpur; incidentally, that match was Sachin Tendulkar's final one-day international. The two were involved in a 133-run partnership as India chased down 330.
Virat Kohli struggled for runs for a couple of years before bouncing back to form with his maiden T20I hundred in the Asia Cup against Afghanistan in 2022. He finished the year with a hundred against Bangladesh and then hit two more centuries against Sri Lanka at the start of 2023. In the Asia Cup, Kohli scored a fine hundred against Pakistan and then followed that up with a sensational hundred in a successful run chase against Bangladesh in the 2023 World Cup.

Virat Kohli's form was going to be key for India in the World Cup and the run-machine has not let the team down. In their tournament opener against Australia, India were in a spot of bother but Kohli hit a composed 85 and alongwith KL Rahul (97 not out), steered the side to a comfortable victory.

Virat Kohli could have equaled Sachin Tendulkar's record in Dharamsala but he fell for 95 against New Zealand with India in sight of another victory in the ongoing World Cup. Against Sri Lanka, Kohli was tentative at the start of his innings but he settled down to score a classy 88.

Virat Kohli is in the middle of one of his best years in one-day internationals. During his knock against Sri Lanka, Kohli went past Tendulkar with his 8th 1000-run calendar year. He had come close in 2010 when he finished with 995 runs. Over the next four years, Kohli would score over 1000 till 2014.`,
    image: '../photo.avif' // replace with the path to your image
  };

  return (
    <div className="App">
      <NewsArticle article={article} />
    </div>
  );
};

export default App;
