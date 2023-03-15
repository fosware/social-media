import Layout from "@/components/Layout";
import Card from "@/components/Card";
import Avatar from "@/components/Avatar";

export default function NotificationsPage() {
    return (
        <Layout>
            <h1 className="text-6xl mb-4 text-gray-300">Notifications</h1>
            <Card>
                <div className="flex gap-3 items-center">
                    <Avatar />
                    <div>
                        Jhon Doe liked your photo
                    </div>
                </div>
            </Card>
        </Layout>

    );
}