import {
  string,
  text,
  datetime,
  list,
  file,
  image,
  markdown,
  customEditor,
  boolean,
  object,
  select,
  relation,
  map,
  number,
  save,
  fileCollection,
  FileCollection,
  Files,
  files,
  title,
  folderCollection,
  FolderCollection,
  AnyWidget,
} from "./buildconf.ts";

const pic = (title: string, name: string) =>
  object(title, name, [
    image("Obrázek", "pic"),
    string("Popis obrázku", "desc", {
      hint: "Popis slouží ke zpřístupnění obrazového obsahu v textové formě.",
      required: true,
    }),
  ]);

const slug = (required: boolean = false) =>
  string("Řetezec v adrese", "slug", {
    hint: "Pouze číslice, písmena anglické abecedy, spojovník a podtržítko.",
    pattern: [
      "^[a-z0-9-_]+$",
      "Řetezec v adrese může obsahovat pouze číslice, písmena anglické abecedy, spojovník a podtržítko.",
    ],
    required: required,
  });

const fig = (title: string, name: string) =>
  object(title, name, [
    image("Obrázek", "pic"),
    string("Titulek obrázku", "caption", {
      hint: "Titulek viditelný pod obrázkem.",
    }),
    string("Popis obrázku", "desc", {
      hint: "Popis slouží ke zpřístupnění obrazového obsahu v textové formě.",
      required: true,
    }),
  ]);

const attached = (
  listTitle: string = "Přílohy",
  name: string = "attachments"
) =>
  list(listTitle, "Příloha", name, [
    title("Název přílohy"),
    file("Soubor", "file"),
    string("Odkaz", "link"),
  ]);

const links = (title: string, name: string = "links") => {
  return list(title, "odkaz", name, [
    string("Odkaz", "link"),
    string("Popis", "text"),
  ]);
};

const englishWidget = (widget: AnyWidget) => {
  const ew = { ...widget };

  if (ew.widget && ew.widget === "relation")
    ew.collection = `${ew.collection}-en`;

  return ew;
};

const englishFolder = (collection: FolderCollection) => {
  const en = {
    ...collection,
    name: `${collection.name}-en`,
    label: `${collection.label} (EN)`,
    label_singular: `${collection.label_singular} (en)`,
    folder: collection.folder.replace("content/", "content-en/"),
    fields: collection.fields.map((field: AnyWidget) => englishWidget(field)),
  };

  if (collection.public_folder)
    en.public_folder = collection.public_folder.replace(
      "next-book.info/",
      "next-book.info/en/"
    );

  if (collection.preview_path)
    en.preview_path = collection.preview_path.replace(/^\//, "/en/");

  return en;
};

const englishFiles = (files: Files) => {
  return {
    ...files,
    label: `${files.label} (EN)`,
    name: `${files.name}-en`,
    files: files.files.map((file: FileCollection) => ({
      ...file,
      file: file.file.replace("content/", "content-en/"),
      fields: file.fields.map((field: AnyWidget) => englishWidget(field)),
    })),
  };
};

const i18nStrings = [
  string("claim", "claim"),
  string("library", "library"),
  string("blog", "blog"),
  string("concept", "concept"),
  string("non-profit", "non-profit"),
  string("get-in-touch", "get-in-touch"),
];

const preklady = files("Překlady", "i18n", [
  fileCollection("Český", "cs", "i18n/cs.yml", i18nStrings),
  fileCollection("English", "en", "i18n/en.yml", i18nStrings),
]);

const pages = files("Pages", "pages", [
  fileCollection("Homepage", "home", "content/_index.markdown", [
    title("Titulek"),
    markdown("Intro", "description"),
    markdown("Vision", "vision"),
    object("Money CTA", "money-cta", [
      title("Claim"),
      string("Button", "button"),
    ]),
    list("Who is it good for?", "target group", "good-for", [
      title("Target group"),
      markdown("Reasons", "reasons"),
      string("Link text", "link-text"),
      string("Link", "link"),
    ]),
    object("Open platform", "open", [
      title("Title"),
      markdown("Description", "desc"),
    ]),
    object("Newsletter", "newsletter", [
      title("Title"),
      markdown("Description", "desc"),
      string("Legal", "legal"),
      markdown("Not sure? Archive", "not-sure"),
    ]),
  ]),
  fileCollection("Library", "library", "content/library/_index.md", [
    title("Title"),
    markdown("Intro", "description"),
    list("Other sources", "source", "sources", [
      title("Title"),
      string("Description", "desc"),
      string("Button text", "button"),
      string("Button link", "link"),
    ]),
  ]),
  fileCollection("Concept", "concept", "content/concept/_index.md", [
    title("Title"),
    markdown("Intro", "description"),
    markdown("Text", "body"),
  ]),
  fileCollection("Non-profit", "ngo", "content/non-profit/_index.md", [
    title("Title"),
    markdown("Intro", "description"),
    markdown("Text", "body"),
    list("Team", "member", "team", [
      title("Name"),
      image("Portrait", "portrait"),
      markdown("Description", "desc"),
    ]),
    object("Join us!", "join", [
      title("Title"),
      markdown("Description", "desc"),
      string("Button text", "button"),
      string("Button link", "link"),
    ]),
  ]),
  fileCollection("Contact", "contact", "content/contact/_index.md", [
    title("Title"),
    markdown("Description", "description"),
    markdown("Text", "body"),
  ]),
  fileCollection("Books", "books", "data/books.yaml", [
    title("Title"),
    list("Books", "book", "books", [
      title("Title"),
      image("Cover", "cover"),
      string("Author", "author"),
      string("Year published", "year"),
      string("Description", "desc"),
      select("Collection", "collection", ["cs", "en", "Čapek", "ngo"]),
    ]),
  ]),
]);

const blog = folderCollection(
  "Blog",
  "blog post",
  "blog",
  {
    folder: "content/blog",
    path: "{{slug}}/index",
    extension: "md",
    create: true,
    media_folder: "",
    public_folder: "",
  },
  [
    title("Title"),
    boolean("Save as a draft", "draft"),
    datetime("Publication date", "date", { time_format: false }),
    markdown("Perex", "description"),
    markdown("Text", "body"),
  ]
);

save("./static/admin/config.yml", {
  backend: {
    name: "git-gateway",
    branch: "main",
  },
  locale: "cs",
  media_folder: "content/media",
  public_folder: "/media",
  site_domain: "https://www.next-book.info/",
  display_url: "https://www.next-book.info/",
  slug: {
    encoding: "ascii",
    clean_accents: true,
    sanitize_replacement: "_",
  },
  collections: [pages, blog, englishFiles(pages), englishFolder(blog)],
});
