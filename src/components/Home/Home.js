import React from 'react'
import Layout from '../Layout/Layout'
import '../Home/Home.css';

const Home = () => {
  return(
    <Layout> 
    <section className="about">
     <h1>About the Farm Fam...</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
         ut labore et dolore magna aliqua. Tincidunt augue interdum velit euismod in pellentesque massa.
          Elit duis tristique sollicitudin nibh sit amet commodo. Ac turpis egestas maecenas pharetra 
          convallis posuere morbi. Imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor. 
          Quis imperdiet massa tincidunt nunc pulvinar sapien. Cras semper auctor neque vitae tempus quam
           pellentesque. Egestas sed sed risus pretium quam vulputate dignissim. Nunc consequat interdum 
           varius sit. Tellus cras adipiscing enim eu. Sed viverra tellus in hac habitasse platea dictumst
            vestibulum rhoncus. Purus faucibus ornare suspendisse sed nisi lacus. A pellentesque sit amet
             porttitor eget dolor. Tellus orci ac auctor augue. Est velit egestas dui id ornare arcu odio 
             ut sem. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Morbi enim nunc
              faucibus a pellentesque. Aenean euismod elementum nisi quis eleifend quam. Metus vulputate eu
               scelerisque felis imperdiet proin fermentum leo. Dictum non consectetur a erat nam at. </p>
 
         <p>Arcu odio ut sem nulla pharetra diam. A diam maecenas sed enim ut. Feugiat vivamus at augue 
             eget arcu. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Diam vel 
             quam elementum pulvinar etiam non quam lacus suspendisse. Imperdiet nulla malesuada pellentesque
          elit. Ornare quam viverra orci sagittis eu volutpat odio. Mattis nunc sed blandit libero volutpat
           sed cras ornare. Non odio euismod lacinia at quis risus sed vulputate odio. Et tortor consequat 
           id porta nibh venenatis cras. At urna condimentum mattis pellentesque. Aenean vel elit scelerisque
            mauris pellentesque pulvinar pellentesque. Eget nunc lobortis mattis aliquam faucibus purus. </p>
    </section>
   
     <span className="title">Hot Deals:</span>
    <section className="deal-section">
 
    </section>
    <section className="link-section">
     <h1 className="link-title">Helpful Links:</h1>
     <div className="links">
     <iframe width="350" height="300" src="https://www.youtube.com/embed/pdf8inDpp0k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <iframe width="350" height="300" src="https://www.youtube.com/embed/1x29gSHza6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
     <iframe width="350" height="300" src="https://www.youtube.com/embed/mjQ-o4iOIVA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
     </section> 
    </Layout>
  )
}


export default Home