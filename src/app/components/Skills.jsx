import Image from 'next/image'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-wider uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-4'>What I can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in-out duration-300'>
            <div className='flex flex-cols-2 gap-4 justify-center  items-center'>
              <div className='m-auto mt-8'>
                <Image
                  src={'/skills/Swagger.png'}
                  width={150}
                  height={100}
                  alt='/'
                />
                <div className='flex flex-col items-center justify-center mt-12'>
                  <h3>Swagger Docs</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in-out duration-300'>
            <div className='flex flex-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto mt-10'>
                <Image
                  src={'/skills/Jest.png'}
                  width={150}
                  height={100}
                  alt='/'
                />
                <div className='flex flex-col items-center justify-center mt-10'>
                  <h3>Jest Testing</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in-out duration-300'>
            <div className='flex flex-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto mt-10'>
                <Image
                  src={'/skills/javascript.png'}
                  width={150}
                  height={100}
                  alt='/'
                />
                <div className='flex flex-col items-center justify-center mt-10'>
                  <h3>JavaScript</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in-out duration-300'>
            <div className='flex flex-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto mt-10'>
                <Image
                  src={'/skills/react.png'}
                  width={150}
                  height={100}
                  alt='/'
                />
                <div className='flex flex-col items-center justify-center mt-10'>
                  <h3>React</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in-out duration-300'>
            <div className='flex flex-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto mt-10'>
                <Image
                  src={'/skills/node.png'}
                  width={150}
                  height={100}
                  alt='/'
                />
                <div className='flex flex-col items-center justify-center mt-10'>
                  <h3>Node Js</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in-out duration-300'>
            <div className='flex flex-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto mt-10'>
                <Image
                  src={'/skills/exp.png'}
                  width={150}
                  height={100}
                  alt='/'
                />
                <div className='flex flex-col items-center justify-center mt-10'>
                  <h3>Express Js</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in-out duration-300'>
            <div className='flex flex-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto mt-10'>
                <Image
                  src={'/skills/mongo.png'}
                  width={150}
                  height={100}
                  alt='/'
                />
                <div className='flex flex-col items-center justify-center mt-10'>
                  <h3>Mongo Db</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in-out duration-300'>
            <div className='flex flex-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto mt-10'>
                <Image
                  src={'/skills/github1.png'}
                  width={150}
                  height={100}
                  alt='/'
                />
                <div className='flex flex-col items-center justify-center mt-10'>
                  <h3>Github</h3>
                </div>
              </div>
            </div>
          </div>
          z
        </div>
      </div>
    </div>
  )
}

export default Skills
