function FindProxyForURL(url, host) {
    // Excluir www.domestika.org y domestika.org del proxy
    if (dnsDomainIs(host, "domestika.org") || shExpMatch(host, "www.domestika.org")) {
        return "DIRECT"; // Conexión directa
    }

    // Usar proxy para todas las demás páginas
    return "PROXY 46.3.124.181:50100";
}
