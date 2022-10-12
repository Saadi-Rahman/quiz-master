import React from 'react';

const Blog = () => {
    return (
        <div className='container mb-5 pb-5'>
            <h2 className='fw-bold text-teal'>QuizMaster's weekly Blog</h2>
            <hr />

            <h3 className='pt-3 pb-2 text-teal'>React Router</h3>
            <div className='border-start ps-4'>
                <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. <br /><br />
                React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications. </p> <br />
                <h5>Purpose of react router</h5>
                <p>React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.</p>
            </div>
            <br /><br />

            <h3 className='pt-3 pb-2 text-teal'>React Context API: What is it and How it works?</h3>
            <div className='border-start ps-4'>
                <p>Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. Let's see how to use it. The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p> <br />
                <h5>How it works?</h5>
                <p>Context provides a way to pass data through the component tree without having to pass props down manually at every level.In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
                Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.<br /><br />
                React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <br /><br />

            <h3 className='pt-3 pb-2 text-teal'>React JS useRef Hook</h3>
            <div  className='border-start ps-4'>
                <p>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react. The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.</p>
                <h6>Syntax:</h6>
                <p>const refContainer = useRef(initialValue);</p>

                <p>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.</p>
            </div>
        </div>
    );
};

export default Blog;