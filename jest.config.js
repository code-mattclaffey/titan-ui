module.exports = {
    roots: ['<rootDir>/src'],
    transform: {
        '\\.(ts|tsx)?$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    testRegex: '.*.test\\.(ts|tsx)$',
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
