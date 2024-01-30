yarn create redwood-app <name> --typescript
cd <name>
yarn install
yarn rw dev
yarn rw generate page Home /
yarn rw generate page About
yarn rw g layout blog
yarn rw prisma migrate dev
yarn rw g scaffold post
yarn rw g cell Articles
yarn rw g page Article
yarn rw g cell Article
yarn rw g component Article
yarn rw g page Contact
yarn rw g sdl Contact
yarn rw prisma studio
