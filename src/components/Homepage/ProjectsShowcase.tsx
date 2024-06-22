import { Card, CardContent } from "../ui/card";

const ProjectsShowcase = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            My Latest Projects
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Here are some of my recent projects. Click on a project to learn
            more.
          </p>
        </div>
        <div className="grid gap-4 sm:gap-6 lg:order-last">
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Project Title Goes Here</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description of the project goes here. It can be a bit longer
                  to showcase the project&apos;s features and highlights.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Project Title Goes Here</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description of the project goes here. It can be a bit longer
                  to showcase the project&apos;s features and highlights.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 md:p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Project Title Goes Here</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Description of the project goes here. It can be a bit longer
                  to showcase the project&apos;s features and highlights.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
