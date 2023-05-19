import React from 'react'
import vg from '../Assets/pexels-thisisengineering-3861958.jpg'

const Home = () => {
  return (
    <>
    <div className='home'>
        <main>
        <h1>Techy sweb</h1>
        <p>here are six levels of headings </p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid quam eum tempore eius hic culpa. Magnam quas possimus
                nemo explicabo! Quod suscipit fuga enim ea officia dolor quidem earum
                minus aspernatur alias, sunt nulla laudantium </p>
        </div>
    </div>
    </>
  )
}

export default Home