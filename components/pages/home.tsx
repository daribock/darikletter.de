'use client';

import Image from 'next/image';
import {
  PROJECTS,
  WORK_EXPERIENCE,
  EMAIL,
  socialLinks,
  metaData,
} from '../../lib/data';
import { ReactNode } from 'react';
import { Button } from '../ui/button';
import ThemeSwitch from '../theme-switch';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
interface HomeProps {
  postList: ReactNode;
}

function getGradientForProject(projectId: string) {
  const gradients = [
    'bg-linear-to-r from-cyan-500 to-blue-500',
    'bg-linear-to-bl from-violet-500 to-fuchsia-500',
    'bg-linear-to-t from-sky-500 to-indigo-500',
    'bg-linear-65 from-purple-500 to-pink-500',
  ];

  return gradients[parseInt(projectId) - 1];
}

export default function Home({ postList }: HomeProps) {
  return (
    <main>
      <section>
        <div>
          <ThemeSwitch />
          <p>{metaData.description}</p>
          <Button>test</Button>

          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Work Experience */}
      <section>
        <h3>Work Experience</h3>
        <div>
          {WORK_EXPERIENCE.map((job) => (
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <div>
                <div>
                  <div>
                    <h4>{job.title}</h4>
                    <p>{job.company}</p>
                  </div>
                  <p>
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Selected Projects */}
      <section>
        <h3>Selected Projects</h3>
        <div>
          {PROJECTS.map((project) => (
            <div key={project.name}>
              <div>
                {project.image ? (
                  // Is already in the image object
                  // eslint-disable-next-line jsx-a11y/alt-text
                  <Image {...project.image} />
                ) : (
                  <div
                    style={{
                      backgroundImage: `linear-gradient(to right, ${getGradientForProject(project.id)})`,
                    }}
                  />
                )}
              </div>
              <div>
                <a href={project.link} target="_blank">
                  {project.name}
                  <span></span>
                </a>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section>
        <h3>Blog</h3>
        <div>{postList}</div>
      </section>

      <section>
        <h3>Connect</h3>
        <p>
          Feel free to contact me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <div>
          {Object.values(socialLinks).map((link) => (
            <span key={link.link}>{link.label}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
