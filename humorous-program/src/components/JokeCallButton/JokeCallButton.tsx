import React from 'react';
interface Props {
  onClick:React.MouseEventHandler;
}

const JokeCallButton:React.FC<Props> = React.memo(({ onClick }) => {
  console.log('Button is rendered');
  return (
    <button onClick={onClick} className="btn btn-primary">
      Get Joke
    </button>
  );
}
)
export default JokeCallButton;
