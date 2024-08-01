import { Fragment } from 'react';

import { ProjectCard } from '@/components/common/project-card';
import { ProjectBody } from '@/components/project-detail/project-body';
import * as D from '@/components/ui/dialog';
import { Project } from '@/config/types';

interface Props {
  list: Project[];
}

export default function ProjectList({ list }: Props) {
  return (
    <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2'>
      <D.Dialog>
        {list.map((project) => (
          <Fragment key={project.slug}>
            <D.DialogTrigger>
              <ProjectCard project={project} />
            </D.DialogTrigger>
            <D.DialogContent className='px-0'>
              <div className='max-h-[80vh] overflow-y-scroll'>
                <ProjectBody project={project} />
              </div>
            </D.DialogContent>
          </Fragment>
        ))}
      </D.Dialog>
    </div>
  );
}
