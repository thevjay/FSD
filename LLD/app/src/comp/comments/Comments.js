import React from 'react'
import CommentBox from './CommentBox'

const data = [
    {
        username: "Vijay",
        comment: "Lorem ipsum dolar sit amet cosectur adip occurence velit",
        replies: [
            {
                username: "Deepika Padukone",
                comment: "Lorem ipsum dolar sit amet cosectur adip occurence velit",
            },
        ]
    },
    {
        username: "Elon Musk",
        comment: "Lorem ipsum dolar sit amet cosectur adip occurence velit",
        replies: [
            {
                username: "Deepika Padukone",
                comment: "Lorem ipsum dolar sit amet cosectur adip occurence velit",
                replies: [
                    {
                        username: "Deepika Padukone",
                        comment: "Lorem ipsum dolar sit amet cosectur adip occurence velit",
                        replies:[
                            {
                                username: "Deepika Padukone",
                                comment: "Lorem ipsum dolar sit amet cosectur adip occurence velit",
                                replies:[
                                    {
                                        username: "Deepika Padukone",
                                        comment: "Lorem ipsum dolar sit amet cosectur adip occurence velit",
                                        replies:[
                                            {
                                                username: "Deepika Padukone",
                                                comment: "Lorem ipsum dolar sit amet cosectur adip occurence velit",
                                            },
                                        ]
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        username: "Deepika Padukone",
                        comment: "Lorem ipsum dolar sit amet cosectur adip occurence velit",
        
                    }
                ]
            },
        ]
    },
    {
        username: "Sachin Tendulkar",
        comment: "Lorem ipsum dolar sit amet cosectur adip occurence velit",
        replies: [
            {
                username: "Deepika Padukone",
                comment: "Lorem ipsum dolar sit amet cosectur adip occurence velit",

            }
        ]
    },
]

const Comments = () => {
  return (
    <div>
      <CommentBox data={data}/>
    </div>
  )
}

export default Comments
