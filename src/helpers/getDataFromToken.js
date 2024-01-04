import Jwt  from "jsonwebtoken";

export const getDataFromToken = async (request) => {
    try {
        const token = request.cookies.get("token")?.value || ""
        const decodedToken = Jwt.verify(token, process.env.TOKEN_SECRET)
        return decodedToken.id;
    } catch (error) {
        throw new Error(error.message)
    }
}