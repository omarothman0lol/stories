import { notFound } from "next/navigation";
import { STORIES, Story } from "@/data/stories";
import StoryReaderClient from "@/components/StoryReaderClient";

export async function generateStaticParams() {
  return STORIES.map((story) => ({
    id: story.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function StoryPage({ params }: PageProps) {
  const { id } = await params;
  const story = STORIES.find((s) => s.id === id);

  if (!story) {
    notFound();
  }

  // Find next and previous stories in the same section
  const sectionStories = STORIES.filter((s) => s.section === story.section);
  const currentIndex = sectionStories.findIndex((s) => s.id === story.id);
  const prevStory = currentIndex > 0 ? sectionStories[currentIndex - 1] : null;
  const nextStory = currentIndex < sectionStories.length - 1 ? sectionStories[currentIndex + 1] : null;

  return (
    <StoryReaderClient
      story={story}
      prevStory={prevStory}
      nextStory={nextStory}
    />
  );
}
