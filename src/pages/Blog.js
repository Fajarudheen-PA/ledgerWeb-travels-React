import React, { useEffect } from 'react'
import NavBar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'
import './Blog.css'

function Blog() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const blogPosts = [
    {
      id: 1,
      category: 'Travel Tips',
      title: 'Top 10 Travel Destinations for 2024',
      excerpt: 'Discover the most stunning and trending destinations that should be on every traveler\'s bucket list this year.',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: '🌍',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      category: 'Visa Guide',
      title: 'Essential Visa Application Tips',
      excerpt: 'Learn the key steps and insider tips to make your visa application process smooth and successful.',
      author: 'Michael Chen',
      date: 'March 10, 2024',
      readTime: '8 min read',
      image: '📋',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      category: 'Adventure',
      title: 'Backpacking Through Southeast Asia',
      excerpt: 'A comprehensive guide to exploring the beautiful countries of Southeast Asia on a budget.',
      author: 'Emma Wilson',
      date: 'March 5, 2024',
      readTime: '12 min read',
      image: '🎒',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      category: 'Travel Tips',
      title: 'How to Pack Like a Pro',
      excerpt: 'Master the art of efficient packing and make your travels easier with these expert tips and hacks.',
      author: 'David Martinez',
      date: 'March 1, 2024',
      readTime: '6 min read',
      image: '✈️',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 5,
      category: 'Destinations',
      title: 'Hidden Gems of Europe',
      excerpt: 'Explore off-the-beaten-path destinations in Europe that will take your breath away without the crowds.',
      author: 'Sophie Brown',
      date: 'February 25, 2024',
      readTime: '10 min read',
      image: '🏛️',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      id: 6,
      category: 'Travel Tips',
      title: 'Traveling Solo: A Complete Guide',
      excerpt: 'Everything you need to know about solo travel - from safety tips to making the most of your journey alone.',
      author: 'Alex Thompson',
      date: 'February 20, 2024',
      readTime: '7 min read',
      image: '🧳',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    }
  ]

  const categories = ['All', 'Travel Tips', 'Visa Guide', 'Adventure', 'Destinations', 'Travel Stories']

  return (
    <div className='blog-page'>
      <NavBar />
      
      {/* Hero Section */}
      <section className='blog-hero'>
        <div className='content-wrapper'>
          <div className='blog-hero__content fade-in-up'>
            <h1 className='blog-hero__title'>Travel Blog</h1>
            <p className='blog-hero__subtitle'>Explore, Learn, and Plan Your Next Adventure</p>
            <div className='blog-hero__divider'></div>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className='blog-categories'>
        <div className='content-wrapper'>
          <div className='blog-categories__content'>
            {categories.map((category, index) => (
              <button 
                key={index} 
                className={`category-btn ${index === 0 ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className='blog-featured'>
        <div className='content-wrapper'>
          <div className='blog-featured__content'>
            <div className='blog-featured__left slide-in-left'>
              <div className='featured-badge'>Featured Post</div>
              <h2 className='featured-title'>The Ultimate Guide to International Travel</h2>
              <p className='featured-excerpt'>
                Planning an international trip can be overwhelming, but with the right guidance, it can be a breeze. 
                From visa applications to travel insurance, we cover everything you need to know to travel with confidence.
              </p>
              <div className='featured-meta'>
                <span className='featured-author'>John Traveler</span>
                <span className='featured-date'>March 20, 2024</span>
                <span className='featured-read-time'>15 min read</span>
              </div>
              <button className='featured-read-btn'>Read More</button>
            </div>
            <div className='blog-featured__right slide-in-right'>
              <div className='featured-image' style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                <div className='featured-emoji'>✈️🌍</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className='blog-posts'>
        <div className='content-wrapper'>
          <h2 className='blog-posts__title'>Latest Articles</h2>
          <div className='blog-posts__grid'>
            {blogPosts.map((post, index) => (
              <article key={post.id} className={`blog-card fade-in-up`} style={{animationDelay: `${index * 0.1}s`}}>
                <div className='blog-card__image' style={{background: post.gradient}}>
                  <span className='blog-card__emoji'>{post.image}</span>
                </div>
                <div className='blog-card__content'>
                  <span className='blog-card__category'>{post.category}</span>
                  <h3 className='blog-card__title'>{post.title}</h3>
                  <p className='blog-card__excerpt'>{post.excerpt}</p>
                  <div className='blog-card__footer'>
                    <div className='blog-card__author'>
                      <span className='author-avatar'>{post.author.charAt(0)}</span>
                      <span className='author-name'>{post.author}</span>
                    </div>
                    <div className='blog-card__meta'>
                      <span className='blog-date'>{post.date}</span>
                      <span className='blog-read-time'>{post.readTime}</span>
                    </div>
                  </div>
                  <button className='blog-card__btn'>Read Article →</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className='blog-newsletter'>
        <div className='content-wrapper'>
          <div className='newsletter-content fade-in-up'>
            <h2 className='newsletter-title'>Subscribe to Our Newsletter</h2>
            <p className='newsletter-subtitle'>Get the latest travel tips, deals, and exclusive content delivered to your inbox</p>
            <div className='newsletter-form'>
              <input 
                type='email' 
                placeholder='Enter your email address' 
                className='newsletter-input'
              />
              <button className='newsletter-btn'>Subscribe</button>
            </div>
            <p className='newsletter-privacy'>We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Blog

