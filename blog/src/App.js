import './App.css';

const post = 'blog test title';

function App() {
  return (
    <div className="App">
      {/* 
        class로 하면 예약어 겹처서 jsx에서는 className 사용
      */}
      <div className="black-nav">
        {/* 
        style grammar style = {{}}
        */}
        <h4 style={{ color: 'red', fontSize: '16px' }}>blog</h4>
      </div>
      {/*
       jsx 변수 중괄호 = (data binding)
       */}
      <h4>{post}</h4>
    </div >
  );
}

export default App;
