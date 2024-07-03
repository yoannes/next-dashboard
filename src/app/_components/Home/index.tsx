import { Button, Card, CardBody, CardHeader } from "@/app/_components"
import { HomeHeader, TimeTracker, WorkHourAnalysis } from "./_components"
import styles from "./home.module.css"

export default function Home() {
  return (
    <div className={styles.root}>
      <HomeHeader />

      <div className={styles.grid}>
        <div className="flex column gap-4">
          <Card>
            <CardHeader title="Work Hour Analysis">
              <Button>Details</Button>
            </CardHeader>
            <CardBody>
              <WorkHourAnalysis />
            </CardBody>
          </Card>

          <div className="flex gap-4">
            <Card>
              <CardHeader title="Company interaction media">
                <Button>Details</Button>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader title="Mood Analysis">
                <Button>Details</Button>
              </CardHeader>
            </Card>
          </div>

          <Card>
            <CardHeader title="Task in progress" hasDivider={false}>
              <Button>Details</Button>
            </CardHeader>
          </Card>
        </div>

        <div className="flex column gap-4">
          <Card>
            <CardHeader title="Time Tracker" hasDivider={false}>
              <Button prefix="history-line">History</Button>
            </CardHeader>

            <CardBody>
              <TimeTracker />
            </CardBody>
          </Card>

          <Card>
            <CardHeader title="Feedback" hasDivider={false}>
              <Button>Details</Button>
            </CardHeader>
          </Card>
        </div>

        <div className="">
          <Card>
            <CardHeader title="Schedule" hasDivider={false}>
              <Button>Details</Button>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}
