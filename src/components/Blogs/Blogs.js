import React from 'react';

const Blogs = () => {
    return (
        <div>
            <section className='py-4'>
                <h3 className='py-3'>What is Context API ???</h3>
                <p className='m-1 p-5'>
                The Context API is a React structure that enables you to exchange unique details
                and assists in solving prop-drilling from all levels of your application. The React
                Context API is a way for a React app to effectively produce global variables that can 
                be passed around. This is the alternative to "prop drilling" or moving props from 
                grandparent to child to parent, and so on.Context is also touted as an easier, lighter 
                approach to state management using Redux.
                </p>


            </section>
            <section className='py-4'>
                <h3 className='py-3'>
                What is meant by semantic tags in HTML???
                </h3>
                <p className='m-1 p-5'>
                Semantic HTML elements are those that clearly describe their meaning in a human- and 
                machine-readable way. Elements such as header, footer and article are all considered
                semantic because they accurately describe the purpose of the element and the type of content
                that is inside them.
                </p>
            </section>
            <section className='py-4'>
                <h3 className='py-3'>
                HTML Block and Inline Elements 
                </h3>
                <p className='m-1 p-5'>
                inline The element doesn’t start on a new line and only occupy just the width it requires. 
                You can’t set the width or height.
                inline-block It’s formatted just like the inline element, where it doesn’t start on a new line.
                BUT, you can set width and height values.
                An inline element has no line break before or after it, and it tolerates HTML elements next to it.
                A block element has some whitespace above and below it and does not tolerate any HTML elements 
                next to it.
                </p>
            </section>
        </div>
    );
};

export default Blogs;