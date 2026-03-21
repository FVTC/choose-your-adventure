
# ✨ A Markdown-Based Adventure Framework

Welcome! This repo hosts interactive, emoji-powered **"choose your own adventure"** stories written entirely in Markdown. Each story is structured with branching scenes, embedded choices, and a clear path system — designed for maximum flexibility and fun.

If you'd like to create your own interactive story using this format, read on!

This framework allows you to create interactive adventures using Markdown files. Each scene is a separate Markdown file, and you can link them together to create a branching narrative.

---

## 🌟 Example Story

[Space Battles](https://github.com/fvtc/choose-your-adventure/blob/master/space-battles/_start-here.md) — A Star Wars-inspired branching adventure.
[Wireless Connection](https://github.com/fvtc/choose-your-adventure/blob/master/wireless-connection/_start-here.md) — A cyberpunk adventure set in a dystopian future.

## 📁 Folder Structure

Each story should live in its own folder.

Each scene is a Markdown file. You can name the files whatever you like, but they should follow a consistent naming convention (e.g., `scene1.md`, `scene2.md`, etc.). However, the first scene should always be named `_start-here.md` to indicate the starting point of the adventure. The underscore prefix helps to keep it at the top of the folder listing.

For an example, the folder structure for a story might look like this:

```
space-battles/
├── _start-here.md
├── scene1.md
├── scene2.md
├── scene3.md
├── scene4.md
├── scene5.md
├── scene6A.md
├── scene6B.md
├── scene6C.md
├── scene7A.md
├── scene7B.md
├── scene8A.md
├── scene9A.md
├── scene10A.md
├── scene10B.md
```

## 📖 Writing Scenes

Each scene is a Markdown file that contains the text of the scene, along with choices that link to other scenes. Here’s a basic structure for a scene:

```markdown
# Scene Title

A short paragraph or two describing the scene. This is where you set the stage for the choices that follow.

> Optional: Include a blockquote for a character's dialogue or internal thoughts.

Then present the choices using bullet points. Each choice should link to another scene file:

- 🛸 [Go to the spaceport](./scene2A.md)
- 🤖 [Talk to the droid](./scene2B.md)
- 🚀 [Board the starship](./scene2C.md)
```

✅ Use emoji to add tone and make choices visually distinct.

✅ Keep scene names short and match the filenames (scene1.md, scene2A.md, etc.).

✅ Use relative links (./scene2A.md, not absolute URLs).


## 🪐 Design Tips

- Keep choices to 2–3 per scene to avoid overwhelming readers.

- Looping and dead ends are welcome — failure is part of the fun!

- Feel free to mimic familiar storylines or create something totally new.

- Keep your tone consistent (humorous, serious, classic sci-fi, etc.).


## 💡 Getting Started

Want to start a new story? Fork and clone this repo, then:

1. Create a new folder for your story.
2. Add an `_start-here.md` file as the entry point.
3. Write your scenes in Markdown files, linking them together with choices.
4. Use relative links to connect scenes (e.g., `./scene2A.md`).
5. Test your links to ensure they work correctly.

## 🧑‍🚀 Contributing

Pull requests are welcome! If submitting a new story:

Place it in a new folder under /your-story-name/.

Keep your Markdown clean, readable, and consistent.

Make sure all links resolve correctly.

## 🔌 Plug-in Recommendation

For a better writing experience, consider using Matt Bierner's [Markdown Preview GitHub Styling](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles) extension in VS Code. It provides a GitHub-like preview of your Markdown files, making it easier to visualize your story as you write.

Once installed, you can open the Markdown preview with the shortcut `Ctrl+Shift+V` (or `Cmd+Shift+V` on macOS) to see how your story will look with GitHub's styling.

## 📬 Questions?
Open an issue or start a discussion — we’re always happy to help storytellers bring their universe to life!