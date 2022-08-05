import Image from 'next/image';
import classes from './projectDetail.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProjectDetail = (props) => {
  const { project } = props;

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  const iframe =
    '<iframe style="border:none" width="100%" height="450" src="https://whimsical.com/embed/aqVxiWzGmMuuHVkkEmWH4"></iframe>';

  function Iframe(props) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }}
      />
    );
  }

  return (
    <div className={classes.projectDetail}>
      <div className='container section mvh-100 projectDetail'>
        <div className={classes.card}>
          <h1>{project.title}</h1>
          <div className='mb-100'>
            <small>
              {Array.isArray(project.tech)
                ? project.tech.join(', ')
                : project.tech}
            </small>
          </div>

          <div className='mb-50'>
            <h2>Description</h2>
            <p>{project.description}</p>
          </div>

          <div className='mb-50'>
            <h2>Key takeaways</h2>
            <p>
              This is a complex project both in the backend and frontend.
              Besides all route and controller logic with authentication, CRUD
              and so on in the backend, my main takeaway for this project is the
              state management with Redux in the frontend.
              <br />
              <br />
              Explain redux usage...
            </p>
          </div>

          <div className='mb-50'>
            <div className='mb-50'>
              <h2>Structure</h2>
              <p>
                Below I listed the file structure and diagrams for both backend
                and frontend. Some code was omitted for simplicity matter (e.g.
                order controllers).
              </p>
            </div>
            <div className='mb-50'>
              <h3>File structure</h3>
              <div className='d-flex'>
                <div className='mr-25'>
                  Backend
                  <br />
                  <br />
                  <div>
                    <a href='#'>
                      <Image
                        // layout='responsive'
                        src={`../../portfolio/images/projects/mernshop/mernshop-files-backend.png`}
                        width={300}
                        height={500}
                        alt='alt'
                      />
                    </a>
                  </div>
                </div>
                <div>
                  Frontend
                  <br />
                  <br />
                  <div>
                    <a href='#'>
                      <Image
                        // layout='responsive'
                        src={`../../portfolio/images/projects/mernshop/mernshop-files-frontend.png`}
                        width={300}
                        height={500}
                        alt='alt'
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3>Backend Diagram</h3>
              <div className='mb-50'>
                <Iframe iframe={iframe} />
              </div>

              <div className='mb-50'>
                <h4>Server</h4>
                <p>
                  The heart of the backend application. Connects to the DB via
                  config/db and uses all routes made available by routes (order,
                  product, user, upload) and error handling directly from the
                  middleware.
                </p>
                <h4>Config/db</h4>
                <p>Makes the connection to the database.</p>

                <h4>Routes</h4>
                <p>
                  Best regarded as Endpoints. Route methods (get, post, put,
                  delete) are defined for the specified route and used in
                  conjunction with a controller and middleware functions, which
                  hold the logic. (e.g. router.post('/login', authUser))
                </p>
                <h4>Controllers</h4>
                <p>
                  Best regarded as the application logic. The functions defined
                  here will be requested when hitting the defined
                  routes/endpoints. It is the place where the logic for a given
                  route is applied.
                </p>
                <h4>Middleware</h4>
                <p>
                  Either called directly from server.js for errorHandling or
                  from a given route, in this case userRoute, for both protect
                  and isAdmin functions. protect will make sure that the user is
                  logged in by verifying their bearer token (which is generated
                  by the util). isAdmin will make sure that the given user has
                  admin rights.
                </p>
                <h4>Utils</h4>
                <p>
                  Generates a token which is called from the userController.
                  (e.g. when logging in a user)
                </p>
                <h4>Models</h4>
                <p>
                  Defines the DB schema for a given model. userModal.js also
                  uses bcrypt to compare and hash passwords.
                </p>
              </div>
            </div>
            <div>
              <h3>Frontend Diagram</h3>
              <div className='mb-50'>
                <Iframe iframe={iframe} />
              </div>
              <div className='mb-50'>
                <h4>Store</h4>
                <p>
                  Combines all reducers and apply thunk (middleware that allows
                  you to return functions).
                </p>
                <h4>Constants</h4>
                <p>Just holds the constants names.</p>
                <h4>Actions</h4>
                <p>Explain... Fetches API and dispatches...</p>
                <h4>Reducers</h4>
                <p>
                  Explain... Takes previous state and action, and returns next
                  state
                </p>
                <h4>Screens</h4>
                <p>useDispatch & useSelector from 'react-redux'</p>
              </div>
            </div>
          </div>

          {project.screenshots ? (
            <div className='mb-50'>
              <h2>Screenshots</h2>
              <Swiper
                rewind={true}
                // grabCursor={true}
                modules={[Pagination, Navigation]}
                navigation={true}
                // pagination={pagination}
                pagination={{
                  dynamicBullets: true,
                }}
                className='mySwiper'>
                {project.screenshots.map((screenshot, index) => (
                  <>
                    <SwiperSlide key={index}>
                      <Image
                        // layout='responsive'
                        src={`../../portfolio/images/projects/${project.slug}/${screenshot.screenshot}`}
                        width={1100}
                        height={800}
                        alt={screenshot.description}
                      />
                      {/* <div className={classes.card}>
                        {screenshot.description}
                      </div> */}
                    </SwiperSlide>
                  </>
                ))}
              </Swiper>
            </div>
          ) : (
            project.image && (
              <div className={classes.projectImage}>
                <Image
                  src={`../../portfolio/images/projects/${project.image}`}
                  width={500}
                  height={360}
                  alt=''
                />
              </div>
            )
          )}

          <div>
            <h2>Links</h2>
            <div className={classes.projectLinks}>
              {project.githubLink && (
                <a href={project.githubLink} target='_blank' rel='noreferrer'>
                  <i className='fab fa-github'></i>
                  Github
                </a>
              )}
              {project.liveLink && (
                <a href={project.liveLink} target='_blank' rel='noreferrer'>
                  <i className='fas fa-link'></i>
                  Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;
