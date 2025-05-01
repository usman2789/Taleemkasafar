export interface Blog {
    id: string;
    title: string;
    slug: string;
    author: string;
    readTime: number;
    coverImage: string;
    excerpt: string;
    content: string[];
    category: string;
  }
  
  const blogs: Blog[] = [
      {
        id: '1',
        title: 'How to write content about your photographs',
        slug: 'how-to-write-content-about-photographs',
        author: 'Sarah Johnson',
        readTime: 7,
        coverImage: '/blog.png',
        category: 'Content',
        excerpt: 'Learn how to craft compelling stories that complement your visual work and engage your audience on a deeper level.',
        content: [
          'Photography is a visual medium, but words have the power to enhance the impact of your images. When you combine striking photographs with well-crafted text, you create a more immersive experience for your audience.',
          'Start by identifying the emotional core of your image. What feeling does it evoke? Use descriptive language that appeals to the senses. Instead of saying "this is a sunset," try "the sky erupted in a symphony of gold and crimson as day surrendered to night."',
          'Consider the story behind the photograph. What was happening just outside the frame? What led to this moment? Sharing the context creates a connection with your viewers.',
          'Be authentic in your writing. Your personal voice and perspective are what make your content unique. Don\'t be afraid to share your challenges, mistakes, or the happy accidents that led to a great shot.',
          'Use technical details sparingly and purposefully. While gear specifications and settings can be educational, they shouldn\'t overshadow the emotional impact of your work. Share technical information when it serves the story or provides genuine value to your audience.',
          'Finally, end with a question or invitation that encourages engagement. Photography is about sharing perspectives, and your written content should open the door to conversation.'
        ]
      },
      {
        id: '2',
        title: 'How to write content about your portraits',
        slug: 'how-to-write-content-about-portraits',
        author: 'Michael Zhang',
        readTime: 6,
        coverImage: '/blog.png',
        category: 'Portraits',
        excerpt: 'Discover how to tell the stories behind your portrait photography that captivates viewers and honors your subjects.',
        content: [
          'Portrait photography is about capturing the essence of a person, and your written content should aim to extend that narrative. The words you choose can transform a simple portrait into a window to someone\'s soul.',
          'When writing about portraits, start with the connection. Describe how you met your subject and what drew you to photograph them. These details create context and emotional resonance.',
          'Focus on the details that make the portrait unique. Perhaps it\'s the subtle smile, a weathered hand, or the way light catches in the eyes. These observations help viewers see what you saw through the viewfinder.',
          'Respect your subject\'s story. If you\'re sharing personal details about the person in your portrait, ensure you have their permission. Sometimes, the most powerful portrait descriptions are those that maintain a sense of mystery while still conveying emotion.',
          'Discuss your technical and artistic choices only if they contribute to the narrative. Explaining why you chose black and white or a particular lighting setup can be insightful if it relates to the emotional impact you wanted to achieve.',
          'Remember that great portrait writing, like great portrait photography, finds the universal in the specific. Connect your subject\'s story to broader human experiences to create resonance with your audience.'
        ]
      },
      {
        id: '3',
        title: 'How to write content about landscape photographs',
        slug: 'how-to-write-content-about-landscape-photographs',
        author: 'Emma Wilson',
        readTime: 8,
        coverImage: '/blog.png',
        category: 'Landscape',
        excerpt: 'Master the art of describing natural scenes in ways that transport your audience to the moment you pressed the shutter.',
        content: [
          'Landscape photography captures the grandeur of the natural world, and your writing should aim to transport readers to these remarkable places. Effective landscape photography content creates a sense of presence and wonder.',
          'Begin by setting the scene with sensory details. What did it feel like to stand there? Was there a gentle breeze, the scent of pine trees, or the distant sound of waves? These details bring dimension to a two-dimensional image.',
          'Share the journey. Landscape photography often involves adventure, and the story of how you reached a remote location can be as compelling as the image itself. Did you hike for hours before dawn? Wait patiently for changing weather conditions? These narratives add value to your work.',
          'Connect the landscape to its history, ecology, or cultural significance. Understanding that a mountain range is millions of years old or that a forest supports countless species adds depth to the viewing experience.',
          'Be honest about your post-processing approach. Today\'s audiences are sophisticated about digital enhancement. If you\'ve made significant alterations to color or composition, consider acknowledging this as part of your creative process.',
          'End by inviting viewers to consider their relationship with the natural world. Great landscape photography isn\'t just about pretty scenery—it can inspire conservation efforts and a deeper appreciation for our environment.'
        ]
      },
      {
        id: '4',
        title: 'How to write content about architectural photographs',
        slug: 'how-to-write-content-about-architectural-photographs',
        author: 'David Chen',
        readTime: 7,
        coverImage: '/blog.png',
        category: 'Architecture',
        excerpt: 'Learn to articulate the stories of buildings and spaces through compelling written descriptions that complement your images.',
        content: [
          'Architectural photography balances technical precision with artistic vision, and your writing should reflect both aspects. Good architectural content provides context, highlights design elements, and evokes the feeling of being in the space.',
          'Start with the architect\'s intention. If possible, research the building\'s design philosophy or interview the architect. Understanding what problems the design aimed to solve provides valuable insight for your audience.',
          'Describe how the building interacts with its environment. Does it stand in stark contrast to surrounding structures, or does it harmoniously blend in? How does it respond to the landscape, climate, and cultural context?',
          'Pay attention to light and how it transforms the space. Architectural photographers know that the same building can look dramatically different throughout the day. Explain why you chose a particular time and how the light enhances specific design elements.',
          'Include human elements when relevant. Architecture exists to serve people, and noting how individuals interact with a space adds vitality to your content. This might include observations about how people move through a public building or how residents personalize a living space.',
          'Don\'t shy away from technical challenges. Explaining how you overcame issues with perspective, dynamic range, or access can provide valuable learning opportunities for other photographers while showcasing your problem-solving abilities.'
        ]
      },
      {
        id: '5',
        title: 'How to write content about product photographs',
        slug: 'how-to-write-content-about-product-photographs',
        author: 'Lisa Morgan',
        readTime: 5,
        coverImage: '/blog.png',
        category: 'Product',
        excerpt: 'Discover techniques for crafting product descriptions that sell while maintaining your artistic integrity and photographic style.',
        content: [
          'Product photography combines commercial purpose with artistic expression, and your writing should balance these elements. Effective product content highlights both aesthetic qualities and practical benefits.',
          'Begin by addressing the viewer\'s desires rather than just the product\'s features. How will this product improve their life? What problem does it solve? Creating this emotional connection is essential for engagement.',
          'Describe your approach to showcasing the product\'s unique qualities. Did you use specific lighting techniques to highlight texture? A particular composition to emphasize form? These insights demonstrate your intentionality as a photographer.',
          'Share your collaboration process with brands or designers when applicable. The relationship between photographer and client often produces the most successful product images, and this behind-the-scenes perspective interests many viewers.',
          'Be truthful about your representation. While product photography aims to present items in their best light, ethical photographers ensure they\'re not misleading consumers about what they\'re purchasing.',
          'Include technical information that might help other photographers who are looking to improve their commercial work. Mentions of lighting setups, post-processing techniques, or even challenges overcome can provide valuable education.'
        ]
      },
      {
        id: '6',
        title: 'How to write content about street photographs',
        slug: 'how-to-write-content-about-street-photographs',
        author: 'James Wilson',
        readTime: 6,
        coverImage: '/blog.png',
        category: 'Street',
        excerpt: 'Learn how to contextualize candid moments and urban scenes with writing that enhances their documentary and artistic value.',
        content: [
          'Street photography captures unposed moments of everyday life, and your writing should preserve the authenticity of these scenes while providing context. Good street photography content balances observation with respect for subjects.',
          'Start by establishing the setting—not just the location, but the time, cultural context, and atmosphere. What makes this particular street corner at this particular moment worthy of documentation?',
          'Discuss what drew your eye to this scene. Was it a juxtaposition of old and new? A moment of human connection? A play of light and shadow? Helping viewers see through your eyes enhances their appreciation of the image.',
          'Address ethical considerations thoughtfully. Street photography involves capturing people who haven\'t explicitly consented to being photographed. Explain your approach to respecting privacy and dignity while still documenting authentic moments.',
          'Connect individual images to broader social themes when appropriate. Street photography often serves as a visual record of urban life, cultural change, or social issues. Without overreaching, consider how your image might fit into these larger narratives.',
          'Be careful about projecting narratives onto strangers. While it\'s tempting to imagine stories about the people in your photographs, acknowledge the limitations of what you can know about a momentary encounter.'
        ]
      },
      {
        id: '7',
        title: 'How to write content about wildlife photographs',
        slug: 'how-to-write-content-about-wildlife-photographs',
        author: 'Nicole Parks',
        readTime: 8,
        coverImage: '/blog.png',
        category: 'Wildlife',
        excerpt: 'Master the art of combining visual impact with educational content to create compelling stories about your wildlife photography.',
        content: [
          'Wildlife photography represents a unique intersection of art, science, and often extreme patience. Your writing should complement these stunning images with information that enhances understanding and appreciation of the natural world.',
          'Begin with accurate identification and context. Name the species, location, and season. This basic information grounds your image in reality and provides essential context for viewers who may be unfamiliar with the subject.',
          'Share the story of the encounter. Wildlife photography often involves remarkable experiences—early mornings, long waits, unexpected moments. These narratives not only entertain but also illustrate the dedication behind wildlife photography.',
          'Include behavioral observations. What is the animal doing in the image? Is this typical behavior, or did you capture something rare? Your insights as a witness to these moments add significant value to the photograph.',
          'Consider conservation implications when relevant. Many wildlife photographers develop deep connections to their subjects and their habitats. Thoughtful comments about conservation status or threats facing a species can raise awareness without becoming preachy.',
          'Be transparent about technical aspects that affect perception. If you\'re using a blind, baiting, or shooting in a controlled environment, acknowledging these methods maintains trust with your audience. Similarly, be clear about significant cropping or other post-processing decisions that might affect how the image is interpreted.'
        ]
      },
      {
        id: '8',
        title: 'How to write content about travel photographs',
        slug: 'how-to-write-content-about-travel-photographs',
        author: 'Robert Kim',
        readTime: 7,
        coverImage: '/blog.png',
        category: 'Travel',
        excerpt: 'Transform your travel images into compelling stories that transport viewers and provide authentic insights into diverse cultures and places.',
        content: [
          'Travel photography combines elements of landscape, portrait, street, and documentary genres, and your writing should be equally versatile. Effective travel content balances visual inspiration with practical information and cultural respect.',
          'Start with a sense of place that goes beyond the obvious. Rather than stating "This is the Eiffel Tower," share the unique atmosphere of that day—perhaps the quality of light, the unexpected quiet of a usually busy spot, or a detail that surprised you.',
          'Include cultural context without falling into stereotypes or oversimplification. Research the history and significance of the places and traditions you photograph, and credit local sources of information when possible.',
          'Share practical insights that might help other travelers. Information about accessibility, best times to visit, or local etiquette around photography can be valuable to your audience while establishing your expertise.',
          'Acknowledge your perspective as an outsider when appropriate. Travel photography involves interpreting places we often don\'t fully understand. A humble acknowledgment of this limitation can prevent your content from seeming presumptuous.',
          'Consider the impact of tourism on the places you photograph. Thoughtful travel photographers recognize their role in a complex system and strive to promote responsible travel through both their images and their words.'
        ]
      }
    ];
    export async function getAllBlogs(): Promise<Blog[]> {
      return blogs;
    }
    
    export async function getBlogBySlug(slug: string): Promise<Blog | null> {
      const blog = blogs.find((blog) => blog.slug === slug);
      if (!blog) {
        console.error(`Blog not found for slug: ${slug}`);
      }
      return blog || null;
    }
    
    export async function getRelatedBlogs(currentBlogId: string, category: string): Promise<Blog[]> {
      const relatedBlogs = blogs
        .filter((blog) => blog.category === category && blog.id !== currentBlogId)
        .slice(0, 4);
    
      if (relatedBlogs.length < 3) {
        const otherBlogs = blogs
          .filter((blog) => blog.id !== currentBlogId && !relatedBlogs.some((rb) => rb.id === blog.id))
          .slice(0, 4 - relatedBlogs.length);
        relatedBlogs.push(...otherBlogs);
      }
    
      if (relatedBlogs.length === 0) {
        console.warn(`No related blogs found for category: ${category}`);
      }
    
      return relatedBlogs;
    }  