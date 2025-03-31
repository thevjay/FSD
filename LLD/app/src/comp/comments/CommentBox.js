import React from 'react'

function CommentBox({ data }) {
  return (
    data.map((comment,index)=>(
        <div className='pl-10 border-l-2 border-black' key={index}>
            <div className='flex'>
                <div>
                    <img 
                        src='https://preview.redd.it/snoovatar/avatars/3ca71cd3-8455-4b2e-be36-c8fe052c6c15-headshot.png?width=64&height=64&auto=webp&s=8fbfc4dcd20144026fd22384fcbf99c1760f66af' 
                        alt='user'
                        className='w-16 p-2 rounded-full border border-black'
                    />
                </div>
                <div>
                    <p className='font-bold p-2'>{comment.username}</p>
                    <p className='px-2'>{comment.comment}</p>
                </div>
            </div>
            <div>
                {comment?.replies && <CommentBox data={comment.replies}/>}
            </div>
        </div>
    ))
  )
}

export default CommentBox;


