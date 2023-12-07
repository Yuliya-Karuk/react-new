const videos = [
  {
    name: 'Замыкания От и До',
    duration: 15,
    id: 1,
  },
  {
    name: 'Roadmap по JS',
    duration: 15,
    id: 2,
  },
  {
    name: 'Что такое Frontend',
    duration: 15,
    id: 3,
  }
]

export function VideoList() {
  return (
    <>
    <h1>Video List</h1>
    {
      videos.map((video) => {
        return (
          <div key={video.id}>
            <p>{video.name}</p>
            <p>{video.duration}</p>
            <button>Лайк</button>
          </div>
        )
      })
    }
    </>
  )
}