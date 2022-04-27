<script>
    export async function bgImage () {
        let data = await fetch("https://cloudcities.studiotomassaraceno.org/wp-json/wp/v2/media?categories=1")
        let result = await data.json()
        return result[0]["source_url"];
        }
</script>